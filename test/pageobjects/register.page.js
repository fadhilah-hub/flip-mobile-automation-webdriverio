class RegisterPage {
    get inputPhoneNumber() {
        return $('id=id.flip.staging:id/PASSWORD_LESS_LOGIN_SCENE-TEXT_INPUT-CREDENTIAL_PHONE_NUMBER');
    }

    get btnLanjut() {
        return $('id=id.flip.staging:id/PASSWORD_LESS_LOGIN_SCENE-BUTTON-NEXT');
    }

    pinKeyboardKey(digit) {
        return $(`id=id.flip.staging:id/INPUT_VIEW-KEYBOARD_VIEW-${digit}`);
    }

    async inputPhone(phone) {
        await this.inputPhoneNumber.waitForDisplayed({ timeout: 10000 });
        await this.inputPhoneNumber.setValue(phone);
    }

    async clickLanjut() {
        await this.btnLanjut.waitForDisplayed({ timeout: 10000 });
        await this.btnLanjut.click();
    }

    async waitForPinKeyboard() {
        const firstKey = await this.pinKeyboardKey('0');
        await firstKey.waitForDisplayed({ timeout: 15000 });
    }

    async inputPin(pin) {
        for (let i = 0; i < pin.length; i++) {
            const key = await this.pinKeyboardKey(pin[i]);
            await key.waitForDisplayed({ timeout: 10000 });
            await key.scrollIntoView();
            await key.click();
            await browser.pause(300);
        }
    }
}

module.exports = new RegisterPage();