import Vue, { PluginObject, PluginFunction } from 'vue';
import swal, { SweetAlertOptions } from 'sweetalert2';

declare interface swal {
    mixin(options?: SweetAlertOptions): typeof swal;
}

declare module 'vue/types/vue' {
    interface Vue {
        $swal: typeof swal; // () => Promise<any>;
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        swal?: typeof swal; // () => Promise<any>;
    }
}

//

declare let VueSweetalert2: PluginFunction<any>;
export default VueSweetalert2;


// declare let VueSweetalert2: (vue: Vue, options?: VueSweetalert2Options) => void;

// export interface VueSweetalert2Options {
//     toast: boolean | VueSweetalert2ToastOptions;
// }

// export interface VueSweetalert2ToastOptions {
//     toast: boolean;
//     position: swal.SweetAlertOptions.position;
//     showConfirmButton: swal.SweetAlertOptions.showConfirmButton;
//     timer: swal.SweetAlertOptions.timer;
// }
