const registerPage = require('../pageobjects/register.page');
const profilePage = require('../pageobjects/profile.page');

const phoneNumber = '081363681138';
const pin = '120505';

describe('Flip E2E - PIN Flow and Logout', () => {
    it('User should login and log out successfully', async () => {
        await registerPage.inputPhone(phoneNumber);
        await registerPage.clickLanjut();
        await registerPage.waitForPinKeyboard();
        await registerPage.inputPin(pin);
        await profilePage.clickProfile();
        await profilePage.clickLogout();
        await profilePage.acceptLogout();
    });
});