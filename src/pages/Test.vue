<template>
  <Layout>
    <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <p class="hidden">
        <label>
          Don’t fill this out if you're human:
          <input name="bot-field" />
        </label>
      </p>
      <p>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit" class="btn">Send</button>
      </p>
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {}
};
</script>
<style scoped>
input,
textarea {
  color: #333 !important;
}
::placeholder {
  color: #333 !important;
}
</style>