const cards = () =>{
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src     = src;
            this.alt     = alt;
            this.title   = title;
            this.descr   = descr;
            this.price   = price;
            this.classes = classes;
            this.parent  = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = ""; // add card class
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
            `;
            // fill with tags and class params

            this.parent.append(element);
        }
    }

    const url = '';

    getResource(url)
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                // adding class with params
                new MenuCard().render();
            });
        });
}

export default cards;