<template>
    <div class=".view-page">
        <div class="view-page__container">
            <div v-if="data && (data.length > 0)" class="view-page__container__card">
                <img :src="data[currentIndex].path" :alt="data[currentIndex].title" class="view-page__container__card_img">
                <div v-if="data[currentIndex].extra" class="view-page__container__card__extra">
                    <img v-for="(item,index) in data[currentIndex].extra" :src="item" 
                        :key="'img-'+index" :alt="data[currentIndex].title" 
                        class="view-page__container__card_img-min">
                </div>
            </div>
        </div>
        <div class="view-page__navigation">
            <div class="view-page_navigation_button" @click="onBack"> back </div>
            <div class="view-page__navigation_button" @click="onNext"> next </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ViewPage",
    data:()=>{
        return {
            data:[],
            currentIndex:0
        }
    },
    created() {
        fetch("/data/alphabets.json")
        .then(res=>{
            console.log(res)
            return res.json();
        })
        .then(data=>{
            console.log(data)
            this.data = data;
        })
        console.log(`fetch json for ${this.$route.params.id}`)
    },

    
    mounted() {
        window.addEventListener("keyup", this.onKeyUp);
    },

    destroyed() {
        window.removeEventListener("keyup", this.onKeyUp);
    },

    methods: {
        onNext() {
            this.currentIndex++;
            if(this.currentIndex == this.data.length){
                this.currentIndex = 0
            }
        },
        onBack() {
            this.currentIndex--;
            if(this.currentIndex < 0){
                this.currentIndex = 25
            }
            // this.$refs["el-" + this.currentIndex][0].scrollIntoView();
        },
        onKeyUp(evt) {
            const keyCode = evt.keyCode;
            switch(keyCode) {
                case 37:
                case 38:
                    this.onBack();
                break;
                case 39:
                case 40:
                    this.onNext();
                break;
                default :
                    evt.stopPropagation();
                    
            }
        }
    },
}
</script>

<style lang="scss">
    .view-page {
        &__container {
            overflow: hidden;
            height:calc(100vh - 5rem);
            &__card {
                width:calc(100vw - 20%);
                height:calc(100vh - 8rem);
                flex-shrink: 0;
                padding: 2rem 10% 3rem;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
               &_img {
                   width: 100%;
                   height: 100%;
               }
               &_img-min {
                   width: 100%;
                   height: 25%;
                   flex-shrink: initial;
               }
               &_title {
                   display: none;
               }
               &__extra {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-content: center;
                    min-width: 200px;
                    width: 20%;
                    height: 100%;
               }
            }
        }
        &__navigation {
            position: fixed;
            top: 3.5rem;
            bottom: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
    }
</style>