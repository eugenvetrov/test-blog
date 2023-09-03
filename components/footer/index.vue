<template lang="pug">
footer(class="footer-app")
    div(class="footer-app__content")
        div(class="footer-app__content_left")
            SharedLogo(width="133px" height="33px")
            FooterDescription
        div(class="footer-app__content_right")
            FooterContacts
            FooterSocialIcons
    Subscription
</template>

<style lang="scss">
    .footer-app {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        background-color: $white-smoke;
        justify-content: center;
        border-top: 1px $gray solid;
        padding-top: 40px;

        &__content {
            display: flex;
            flex-wrap: wrap;
            width: 70%;
            max-width: 1340px;
            justify-content: space-between;

            @media screen and (max-width: 1440px) {
                width: 90%;
            }

            &_left {
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                width: 100%;
                max-width: 426px;
            }

            &_right {
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                width: 100%;
                max-width: 234px;
            }
        }

        &__description {
            font-size: 14px;
            line-height: 20px;
            font-weight: 400;
            
            @media screen and (max-width: 384px) {
                width: 100%;
            }
        }

        &__contacts {
            max-width: 234px;

            &_text {
                font-size: 14px;
                line-height: 20px;
                font-weight: 400;
                margin: 0;
            }

            &_email {
                font-size: 18px;
                line-height: 22px;
                font-weight: 400;
                margin: 0;
                word-break: break-all;
            }
        }

        &__social {
            &-icon {
                margin-right: 20px;
            }

            &-icons {
                margin-top: 30px;
            }            
        }
    }
</style>