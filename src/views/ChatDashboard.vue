<template>
  <div class="chat-dashboard">
    <chat-nav-bar />
    <b-container fluid class="ld-over" :class="{ running: loading }">
      <div class="ld ld-ring ld-spin"></div>
      <b-row>
        <b-col cols="2">
          <room-list />
        </b-col>
        <b-col cols="8">
          <b-row>
            <b-col id="chat-content">
              <message-list />
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <message-form />
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="2">
          <user-list />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import ChatNavBar from "@/components/ChatNavBar";
import RoomList from "@/components/RoomList";
import MessageList from "@/components/MessageList";
import MessageForm from "@/components/MessageForm";
import UserList from "@/components/UserList";
import { mapState } from "vuex";

export default {
  name: "Chat",
  components: {
    ChatNavBar,
    RoomList,
    MessageList,
    MessageForm,
    UserList
  },
  computed: {
    ...mapState(["loading"])
  }
};
</script>
