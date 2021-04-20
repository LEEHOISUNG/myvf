<template>
    <div> 
        <v-list>
            <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title class="title">John Leider</v-list-item-title>
                    <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-menu-down</v-icon>
                </v-list-item-action>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
        <v-list-group
            v-for="(item, i) in items"
            :key="i"
            v-model="item.active"
            :prepend-icon="item.icon"
            no-action
        >
            <template v-slot:activator>
            <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
            </template>

            <v-list-item
            v-for="subItems in item.subItems"
            :key="subItems.title"
            :to="subItems.to"
            >
            <v-list-item-content>
                <v-list-item-title v-text="subItems.title"></v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list-group>
        </v-list>
    </div>
</template>





<script>
    export default {
        data() {
            return {
                items: [
                    {
                        title: 'home',
                        icon:'mdi-home',
                        subItems: [{
                            title: 'Dashboard',
                            to: '/'
                        },
                        {
                          title: 'About',
                          to:'/about'  
                        }
                        ],
                    },
                    {
                        title: 'about',
                        active: true,
                        icon:'mdi-account',
                        subItems: [
                            {
                                title: 'xxx',
                                to:'/xxx'

                            }
                        ]
                    },


                ]
            }
        }
    }
</script>
