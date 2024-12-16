import { Component } from '@angular/core';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
    isProduct: boolean = false;
    count: number = 19;
    datet = new Date('2024-12-16T15:00:00');

    couu() {
        this.count++;
    }

    openProduct() {
        this.isProduct = true;
    }

    closeProduct() {
        this.isProduct = false;
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
}
