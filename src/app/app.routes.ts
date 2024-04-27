import { Routes } from "@angular/router";
//import { AppComponent } from "./app.component";

export const APP_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'parent', title: 'parent', // added KSC
                loadComponent: () => import('./parent/parent.component').then(c => c.ParentComponent)

            },
            {
                path: 'state', title: 'state', // added KSC
                loadComponent: () => import('./state/state.component').then(c => c.StateComponent)

            },
            {
                path: 'grocery', title: 'grocery', // added KSC
                loadComponent: () => import('./grocery/grocery.component').then(c => c.GroceryComponent)

            },
            {
                path: 'dialog', title: 'dialog', // added KSC
                loadComponent: () => import('./dialog/dialog.component').then(c => c.DialogComponent)

            },
            {
                path: 'control', title: 'control',
                loadComponent: () => import('./control-flow/control-flow.component').then(c => c.ControlFlowComponent)

            },
            {
                path: 'kb-test', title: 'kb-test',
                loadComponent: () => import('./kb-test/kb-test.component').then(c => c.KbTestComponent)

            },
            {
                path: 'debounce', title: 'debounce',
                loadComponent: () => import('./debounce/debounce.component').then(c => c.DebounceComponent)

            },
            {
                path: 'local', title: 'local',
                loadComponent: () => import('./local/local.component').then(c => c.LocalComponent)

            },
            {
                path: 'address', title: 'address',
                loadComponent: () => import('./address/address.component').then(c => c.AddressComponent)

            },
        ]
    }

]