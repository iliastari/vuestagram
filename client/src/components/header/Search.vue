<template>
    <div class="search">
        <input class="search-bar" type="text" placeholder="Search">
    </div>

</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.search-bar {
    width:203px;
    border-radius: 3px;
    color: #ccc;
    cursor: text;
    font-size: 13px;
    font-weight: 300;
    padding: 5.5px;
    border:1px solid #ccc;
    background: #fafafa;
    z-index: 2;
    text-align:center;

    &:focus {
        outline:none;
        background:#fff;
        color:#000;
        text-align:left;
    }
}

</style>