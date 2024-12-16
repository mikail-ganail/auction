import { Component } from '@angular/core';

interface IProduct {
    id: number;
    bid: number;
    url: string;
    title: string;
    cost: [number, number];
    from: string;
    term: Date;
}
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent {
    isSelect: boolean = false;
    currentSort: string = 'Новинки';
    productList: IProduct[] = [
        {
            id: 1,
            bid: 19,
            url: 'assets/image/products/1.png',
            title: 'Лимитированный мерч Кофта Джерси | LOVER 58 BLACK',
            cost: [13700, 6999],
            from: 'Егора Крида',
            term: new Date('2024-12-16T15:00:00'),
        },
        {
            id: 2,
            bid: 3,
            url: 'assets/image/products/2.png',
            title: 'Кожаный плащ бренда ZARA',
            cost: [25400, 11320],
            from: 'Ирины Шейк',
            term: new Date('2024-12-16T13:40:00'),
        },
        {
            id: 3,
            bid: 25,
            url: 'assets/image/products/3.png',
            title: 'Бархатный топ, расшитый бисером от H&M Studio',
            cost: [10920, 4500],
            from: 'Аглаи Тарасовой',
            term: new Date('2024-12-16T20:00:00'),
        },
        {
            id: 4,
            bid: 2,
            url: 'assets/image/products/4.png',
            title: 'Трикотажное платье с люрексом Mary Katrantzou',
            cost: [13350, 6800],
            from: 'Аглаи Тарасовой',
            term: new Date('2024-12-17T16:00:00'),
        },
        {
            id: 5,
            bid: 1,
            url: 'assets/image/products/6.png',
            title: 'Ювелирная цепочка от Mozi J',
            cost: [300000, 250000],
            from: 'Славы Мэрлоу',
            term: new Date('2024-12-18T10:00:00'),
        },
        {
            id: 6,
            bid: 13,
            url: 'assets/image/products/7.png',
            title: 'Сумка Louis Vuitton&Mona Lisa',
            cost: [1000000, 950000],
            from: 'Филиппа Киркорова',
            term: new Date('2024-12-18T06:00:00'),
        },
        {
            id: 7,
            bid: 9,
            url: 'assets/image/products/8.png',
            title: 'Сумка от Lanvin с дизайнерской ручкой в форме кошки',
            cost: [372500, 150000],
            from: 'Насти Ивлеевой',
            term: new Date('2024-12-17T19:00:00'),
        },
        {
            id: 8,
            bid: 19,
            url: 'assets/image/products/9.png',
            title: 'Сумка Neo Classic осенне-зимняя коллекция Balenciaga',
            cost: [220450, 138500],
            from: 'Насти Ивлеевой',
            term: new Date('2024-12-31T23:00:00'),
        },
        {
            id: 9,
            bid: 3,
            url: 'assets/image/products/10.png',
            title: 'Золотой кулон ювелирного дома TOUS',
            cost: [156102, 103405],
            from: 'Елизаветы Боярской',
            term: new Date('2024-12-16T20:00:00'),
        },
        {
            id: 10,
            bid: 0,
            url: 'assets/image/products/11.png',
            title: 'Многорядное ожерелье из натурального жемчуга',
            cost: [26891000, 26891000],
            from: 'Эвелины Хромченко',
            term: new Date('2024-12-21T12:00:00'),
        },
        {
            id: 11,
            bid: 4,
            url: 'assets/image/products/12.png',
            title: 'Брючный белый костюм от ZARA',
            cost: [59400, 31800],
            from: 'Ольги Бузовой',
            term: new Date('2024-12-18T10:00:00'),
        },
        {
            id: 12,
            bid: 4,
            url: 'assets/image/products/13.png',
            title: 'Лаконичной черная сумка Celine',
            cost: [432500, 350000],
            from: 'Екатерины Волковой',
            term: new Date('2024-12-17T12:00:00'),
        },
        {
            id: 13,
            bid: 1,
            url: 'assets/image/products/14.png',
            title: 'Летнее пальто в стиле oversize от Burda',
            cost: [51900, 45000],
            from: 'Кристины Асмус',
            term: new Date('2024-12-20T12:00:00'),
        },
        {
            id: 14,
            bid: 13,
            url: 'assets/image/products/15.png',
            title: 'Ожерелье от Mozi J из белого золота и драгоценных камней',
            cost: [925000, 680000],
            from: 'Элджея',
            term: new Date('2024-12-16T17:00:00'),
        },
        {
            id: 15,
            bid: 9,
            url: 'assets/image/products/16.png',
            title: 'Стеклянные туфли Amina Muaddi',
            cost: [240300, 157000],
            from: 'Елены Князевой',
            term: new Date('2024-12-16T18:30:00'),
        },
        {
            id: 16,
            bid: 4,
            url: 'assets/image/products/5.png',
            title: 'Кроссовки Barracuda JIMBO в классическом стиле',
            cost: [24600, 7500],
            from: 'Нурлана Сабурова',
            term: new Date('2024-12-26T16:00:00'),
        },
    ];

    openSelect() {
        this.isSelect = !this.isSelect;
    }

    private timer: any;

    ngOnInit() {
        this.startTimer();
    }

    ngOnDestroy() {
        clearInterval(this.timer);
    }

    startTimer() {
        this.timer = setInterval(() => {
            // Необходимо вызвать Angular Change Detection
            this.productList = [...this.productList];
        }, 1000); // Обновляем каждую секунду
    }

    calculateRemainingTime(term: Date): {
        timeString: string;
        isCritical: boolean;
    } {
        const now = new Date();
        const timeDiff = term.getTime() - now.getTime();

        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        const timeString =
            timeDiff <= 0
                ? 'Время истекло'
                : `Осталось ${hours}:${minutes}:${seconds}`;

        const isCritical = hours < 10; // Меняем цвет, если осталось меньше 3 часов

        return { timeString, isCritical };
    }

    sortByTermAscending() {
        this.productList.sort((a, b) => a.term.getTime() - b.term.getTime());
    }

    sortByTermDescending() {
        this.productList.sort((a, b) => b.term.getTime() - a.term.getTime());
    }

    sortByBidAscending() {
        this.productList.sort((a, b) => a.bid - b.bid);
    }

    sortByBidDescending() {
        this.productList.sort((a, b) => b.bid - a.bid);
    }

    sortByPriceAscending() {
        this.productList.sort((a, b) => a.cost[0] - b.cost[0]);
    }

    sortByPriceDescending() {
        this.productList.sort((a, b) => b.cost[0] - a.cost[0]);
    }

    sortByIDDescending() {
        this.productList.sort((a, b) => b.id - a.id);
    }

    sortByIDAscending() {
        this.productList.sort((a, b) => a.id - b.id);
    }
}
