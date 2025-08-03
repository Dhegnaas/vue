.<template>


<div class="flex flex-col">
    <!-- ✅ NAVBAR -->
    <!-- <navbar/> -->
    <!-- ✅ SIDEBAR + PAGE CONTENT -->
    <div class="flex flex-1">
     <index/>
      <main class="flex-1 p-6 bg-gray-100 overflow-auto">
        <router-view />
      </main>
   </div>
</div>
</template>

<script>
import index from './layouts/index.vue';
export default {
components:{index}
}
</script>

