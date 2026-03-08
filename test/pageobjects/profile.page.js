class ProfilePage {
    get btnProfile() {
        return $('id=id.flip.staging:id/HOME_CONTENT_SCENE-VIEW-BUTTON-PROFILE');
    }

    get btnLogout() {
        return $('id=id.flip.staging:id/PROFILE_ACCOUNT_SCENE-BUTTON-EXIT_APP');
    }
    get btnAcceptLogout() {
        return $('id.flip.staging:id/PROFILE_ACCOUNT_SCENE-TOUCHABLE-ACCEPT_EXIT_APPS')
    }

    async clickProfile() {
        await this.btnProfile.waitForDisplayed({ timeout: 120000 });
        await this.btnProfile.click();
    }
    async clickLogout() {
        await this.btnLogout.waitForDisplayed({ timeout: 15000 });
        await this.btnLogout.click();
    }
    async acceptLogout() {
        await this.btnAcceptLogout.waitForDisplayed({ timeout: 15000 });
        await this.btnAcceptLogout.click();
    }
} 

module.exports = new ProfilePage();