/**
 * @author trumpli<任性>
 */

 export default {
     login: {
         index: () => import('@/view/dev-login/login.vue'),
     },
     entrance: {
         index: () => import('@/view/entrance.vue'),
         welcome: ()=> import('@/view/welcome.vue'),
         order: {
            index: ()=> import('@/view/Order/OrderPage.vue'),
            detail: ()=> import('@/view/Order/OrderdetailPage.vue')
         },
         
     }
 }