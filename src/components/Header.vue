<template>
  <header>
      <nav class="navbar">
        <div class="container">
            <a class="navbar-brand nav-left-col" href="#">
                <img src="../assets/img/logo_seo_w_1x.png" alt="" class="d-inline-block align-text-top">
            </a>
            <ul class="nav-right-col">
                <li class="nav-item">
                    <a class="nav-link">home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">who we are</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">what we do</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">what we work</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link pe-2">careers</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn-yellow-sec">apply</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">news</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn-yellow">
                        get in tuch now
                    </a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="container">
        <div class="row jumbotron">
            <div class="col-6">
                <h1>SEM Campains Made Simple With Avada</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit expedita consectetur architecto voluptas</span>
                <div class="btn-container">
                    <a class="btn-yellow me-3">buy avada now</a>
                    <a class="btn-yellow ms-3">contanct us</a>
                </div>
            </div>
        </div>
    </div>

  </header>
</template>


<script>

export default {
  name: "Header",
  components: {

  },
};
</script>



<style lang="scss" scoped>
@import "../assets/scss/style.scss";

header {
    height: 90vh;
    background-image: url('../assets/img/1-hero-image.png');
    background-size: cover;
    background-position: center;
    nav {
        background: transparent;
        padding: 20px 0 10px 0;
    }
}

.nav-right-col {
    list-style: none;
    li {
        display: inline-block;
        a {
            &:not(.btn-yellow, .btn-yellow-sec):hover {
                color: $di_serria;
            }
        }
        a:not(.btn-yellow, .btn-yellow-sec) {
            padding: 8px 20px;
        }
        .btn-yellow-sec {
            text-transform: uppercase;
            padding: 2px 5px;
            margin-right: 0.5em;
            font-size: 0.7em;
            color: $yellow_orange;
            border: 1px solid $yellow_orange;
            border-radius: 5px;
        }
    }
}

a {
    color: white;
    text-decoration: none;
    text-transform: capitalize;
    cursor: pointer;
}


.container:nth-child(2) {
    height: calc(100% - 82px);
    .row {
        height: 100%;
        align-items: center;
        color: white;
        h1 {
            font-weight: 800;
            font-size: 3em;
        }
        span {
            display: block;
            width: 90%;
            padding-right: 20px;
            margin: 1.5em 0 2em 0;
            font-size: 1.1em;
        }
        a {
            padding: 10px 20px;
            &:nth-child(2) {
                background-color: $science_blue;
            }
        }
    }
}

</style>
