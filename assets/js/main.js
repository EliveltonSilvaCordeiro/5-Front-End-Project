// fuctions ratingValue_1 to 5 >>
// - changes the selected number class from "rating__itens" to "rating__item__selected"
// - userRating content in the id "userRating" in the index.html

function ratingValue_1 () {
    document.getElementsByClassName('section__rating')[0].innerHTML = (
        `
        <span onclick="ratingValue_1()" class="rating__item__selected">1</span>
        <span onclick="ratingValue_2()" class="rating__itens">2</span>
        <span onclick="ratingValue_3()" class="rating__itens">3</span>
        <span onclick="ratingValue_4()" class="rating__itens">4</span>
        <span onclick="ratingValue_5()" class="rating__itens">5</span>
        `
    )

        document.getElementById('userRating').innerText = '1';
}

function ratingValue_2 () {
    document.getElementsByClassName('section__rating')[0].innerHTML = (
        `
        <span onclick="ratingValue_1()" class="rating__itens">1</span>
        <span onclick="ratingValue_2()" class="rating__item__selected">2</span>
        <span onclick="ratingValue_3()" class="rating__itens">3</span>
        <span onclick="ratingValue_4()" class="rating__itens">4</span>
        <span onclick="ratingValue_5()" class="rating__itens">5</span>
        `
    )

        document.getElementById('userRating').innerText = '2';
}

function ratingValue_3 () {
    document.getElementsByClassName('section__rating')[0].innerHTML = (
        `
        <span onclick="ratingValue_1()" class="rating__itens">1</span>
        <span onclick="ratingValue_2()" class="rating__itens">2</span>
        <span onclick="ratingValue_3()" class="rating__item__selected">3</span>
        <span onclick="ratingValue_4()" class="rating__itens">4</span>
        <span onclick="ratingValue_5()" class="rating__itens">5</span>
        `
    )

        document.getElementById('userRating').innerText = '3';
}

function ratingValue_4 () {
    document.getElementsByClassName('section__rating')[0].innerHTML = (
        `
        <span onclick="ratingValue_1()" class="rating__itens">1</span>
        <span onclick="ratingValue_2()" class="rating__itens">2</span>
        <span onclick="ratingValue_3()" class="rating__itens">3</span>
        <span onclick="ratingValue_4()" class="rating__item__selected">4</span>
        <span onclick="ratingValue_5()" class="rating__itens">5</span>
        `
    )

        document.getElementById('userRating').innerText = '4';
}

function ratingValue_5 () {
    document.getElementsByClassName('section__rating')[0].innerHTML = (
        `
        <span onclick="ratingValue_1()" class="rating__itens">1</span>
        <span onclick="ratingValue_2()" class="rating__itens">2</span>
        <span onclick="ratingValue_3()" class="rating__itens">3</span>
        <span onclick="ratingValue_4()" class="rating__itens">4</span>
        <span onclick="ratingValue_5()" class="rating__item__selected">5</span>
        `
    )

    document.getElementById('userRating').innerText = '5';
}

// function rating >>
// - only used on **submitChoice** function
// - store the user's selected number

function rating () {
    userRating = document.getElementById('userRating').innerText;
    return userRating
}

// function submitChoice >>
// - changes HTML page on submit bottom click
// - makes use of the **rating** funtion to show the number that the user selected

function submitChoice () {
    document.getElementsByClassName('page')[0].innerHTML = (
        `
        <main class="card__section">
            <div class="section__image">
                <img src="../assets/img/illustration-thank-you.svg" alt="">
            </div>
            <div class="section__user-rating">
                <p class="user-rating__phrase"> You selected out ${rating()} of 5 </p>
            </div>
            <div class="section__text2">
                <h2 class="text__title">Thank you!</h2>
                <p class="text__paragraph">
                    We appreciate you taking the time to give a rating. If you ever need more support, 
                    don’t hesitate to get in touch!
                </p>
            </div>
        </main>
        `
    )
}
