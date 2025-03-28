export default class Sortar {
    constructor(size, setbars) {
        var arr = [];
        for (var i = 0; i < size; i++) {
            arr[i] = i + 1;
        }

        this.data = arr;
        this.i = 0;
        this.j = 0;
        this.k = 0;
        this.setbars = setbars;
    }

    resetptrs() {
        this.i = 0;
        this.j = 0;
        this.k = 0;
    }

    async shuffleslow() {
        for (var i = 0; i < 500; i++) {
            var rand1 = Math.floor(Math.random() * this.data.length);
            var rand2 = Math.floor(Math.random() * this.data.length);
            this.swap(rand1, rand2);
            this.setbars([...this.data]);
            await this.sleep(0);
        }
    }

    shuffle() {
        for (var i = 0; i < 10000; i++) {
            var rand1 = Math.floor(Math.random() * this.data.length);
            var rand2 = Math.floor(Math.random() * this.data.length);
            this.swap(rand1, rand2);
        }

        this.refresh();
    }

    async bubblesort() {
        var count = 0;
        for (var i = 0; i < this.data.length - 1; i++) {
            for (var j = 0; j < this.data.length - i - 1; j++) {
                if (this.data[j] > this.data[j + 1]) {
                    this.swap(j, j + 1);
                    count++;
                    if (count % 10000 == 0) {
                        this.refresh();
                        await this.sleep(0);
                    }
                }
            }
        }
    }

    bubblesortiters(num) {
        for (var i = 0; i < num; i++) {
            //do the sorting
            if (this.data[this.j] > this.data[this.j + 1]) {
                this.swap(this.j, this.j + 1);
            }

            //increment j
            this.j += 1;

            //reset and i if too high
            if (this.j >= this.data.length - this.i - 1) {
                this.j = 0;
                this.i += 1;
            }
            if (this.i >= this.data.length - 1) {
                this.i = 0;
            }
        }
    }

    swap(a, b) {
        var temp = this.data[a];
        this.data[a] = this.data[b];
        this.data[b] = temp;
    }

    populate(size) {
        var arr = [];
        for (var i = 0; i < size; i++) {
            arr[i] = i + 1;
        }
        this.data = arr;
        this.refresh();
    }

    refresh() {
        if (this.setbars) {
            this.setbars([...this.data]);
        }
    }

    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
