<template>
    <div class="ticket">
        <div>
            <img class="ticket-img" src="../../../assets/image/jipiao.jpg"/>
            <p class="ticket-p">机票</p>
        </div>
        <div>
            <img class="ticket-img" src="../../../assets/image/jiudian.jpg"/>
            <p class="ticket-p">酒店</p>
        </div>
        <div>
            <img class="ticket-img" src="../../../assets/image/huochepiao.jpg"/>
            <p class="ticket-p">火车票</p>
        </div>
        <div>
            <img class="ticket-img" src="../../../assets/image/qichepiao.jpg"/>
            <p class="ticket-p">汽车票</p>
        </div>
        <div>
            <img class="ticket-img" src="../../../assets/image/menpiao.jpg"/>
            <p class="ticket-p">门票</p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'HomeTicket'
}
</script>

<style lang="stylus" scoped>
  .ticket
    display: flex
    justify-content: space-around
    text-align: center
    margin: .3rem 0
    .ticket-img
      width: 80%
    .ticket-p
      font-size: .3rem

</style>


