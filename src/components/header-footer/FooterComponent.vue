<script>

</script>

<template>
 
    <footer>
     
      <div class="copy">
        &copy; 2024 -Team Event
      </div>

      <div class="socialMedia">
        
        <img  class="youtube" src="../../assets/images/youtube.png" alt="">
        <img class="facebook" src="../../assets/images/facebook.png" alt="">
        <img class="instagram" src="../../assets/images/instagram.png" alt="">
      </div>
     
    </footer>
 
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Kulim+Park:wght@300&family=Poppins&family=Roboto&family=Yellowtail&display=swap');

footer {
  background-color: #7DC6D6;
  width: 100%;
  height: 150px;
 
   display: flex;
   justify-content: space-between;
   align-items: center;
  }

.copy {
color: white;
font-family: roboto;
display: flex;
text-align: center;
margin-left: 375px;
}

.socialMedia {
  margin-right: 50px;
  gap: 15px;
}

.facebook {
  margin-right: 15px;
  margin-left: 15px;
}

</style>