<template>
    <div class="setting-popup">
        <div class="container">
            <div class="setting-popup__header">
                <div class="setting-popup__header_title">
                    Settings
                </div>
                <div>close</div>
            </div>
            <div class="setting-popup-content">
                <div class="setting-popup__option">
                    <div class="setting-popup__option_title">Music</div>
                    <div class="setting-popup__option__setting">
                        <div class="setting-popup__option__list_item setting-popup__option__list_item-active">Music 1</div>
                        <div class="setting-popup__option__list_item"> Music 2</div>
                        <div class="setting-popup__option__list_item"> Music 3</div>
                    </div>

                </div>
                <div class="setting-popup__option">
                    <div class="setting-popup__option_title-pre">some random text</div>
                    <div class="setting-popup__option_title">Auto Play</div>
                    <div class="setting-popup__option__setting">
                        <div class="setting-popup__slides__setting_time"></div>
                        <div class="setting-popup__slides__setting_button setting-popup__slides__setting_button-active"></div>
                    </div>
                </div>

                <div class="setting-popup__option">
                    <div class="setting-popup__option_title">Play Random</div>
                    <div class="setting-popup__option__setting"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.setting-popup {
    display: flex;
    height: calc(100vh - 3.5rem);
    width: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: rgba(0.1,0.1,0.1,0.6);
    .container {
        background-color: #333333;
        color: #FDFDFD;
        border-radius: 20px;
        padding: 20px;
        box-shadow: 0px 0px 20px 0px #000000;
        width: 60%;
        height: 60%;
    }
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eaeaea;
        &_title {
            font-size: 2rem;
            line-height: 2.5rem;
            padding: 10px 0px;
            color:#FCFCFC;
        }
    }
    &-content{
        display: grid;
        align-content: baseline;
        justify-content: space-between;
    }
    &__option {
        border-right: 1px solid #eaeaee;
        padding: 10px;
        flex-basis: 100%;
        &_title {
            font-size: 1.4rem;
            line-height: 2rem;
        }
    }
}
</style>