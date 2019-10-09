<template>
    <div class="menu">
        <div class="explore">
             <font-awesome-icon class="icon" icon="compass" />
        </div>
        
        <div class="notifications">
        </div>
        
        <div class="profile">
        </div>
    </div>

</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .menu {
        margin-right:35px;
        display:flex;

        div {
            display:flex;
            align-items:center;
            justify-content: center;
            width:25px;
            height:25px;
            border:1px solid #000;
            margin: 10px;
            cursor:pointer;
        }
        .icon {
           font-size:20px;
        }
    }   
</style>