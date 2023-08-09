describe('Тестирование формы логина и пароля', function () {
    it('Проверка правильного логина и пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('bondarenko@yandex.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Проверка правильного логина и НЕ правильного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('wrongpass123321');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Проверка НЕ правильного логина и правильного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('bondarenko@yandex.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Проверка НЕ правильной валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
 })

 describe('Длинный автотест для HuntingPony', function () {
    it('Оформление заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.wait(500);
        cy.get('[href="/collection/lezhanki"] > .banner-list__item-photo > :nth-child(1) > .img-ratio > .img-ratio__inner > picture > .loaded').click();
        cy.wait(500);
        cy.get('[data-product-id="338933592"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.wait(1000);
        cy.get('.add-cart-counter__btn').click();
        cy.wait(500);
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.wait(500);
        cy.get('.header__cart').click();
        cy.wait(500);
        cy.get('.cart-controls > .button').click();
        cy.wait(1000);
        cy.get('.decorated-title').should('be.visible')
     })
})