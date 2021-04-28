<div>
  About
  <button on:click="{handleClick}">Toast Error</button>
</div>

<script>
  import Toast from "lbl-toast"
  const handleClick = () => {
    Toast.error("异常信息 toast")
  }
</script>