.<template>
<div class="flex flex-col">
    <!-- ✅ NAVBAR -->
    <navbar/>
    <!-- ✅ SIDEBAR + PAGE CONTENT -->
    <div class="flex flex-1">
      <sidebar/>
      <main class="flex-1 p-6 bg-gray-100 overflow-auto">
        <router-view />
      </main>
   </div>
</div>

</template>

<script>
import sidebar from './components/sidebar.vue';
import navbar from './components/navbar.vue';
export default {
components:{sidebar, navbar}
}
</script>

