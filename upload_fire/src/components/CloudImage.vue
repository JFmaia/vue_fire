<template>
    <div>
        <img :src="url" alt="">
    </div>
</template>

<script>
import {storage} from "../firebase" 
import {ref, getDownloadURL} from "firebase/storage"
export default {
    props:{
        path: String,
    },
    data: ()=>{
        return{
            url:'https://placeholder.com/assets/images/150x150-2-500x500.png',
        } 
    },
    mounted(){
        getDownloadURL(ref(storage,this.path)).then(
            (download_url) => (this.url = download_url)
        )
    },
}
</script>

<style>
    
</style>