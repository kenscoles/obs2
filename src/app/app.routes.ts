import { Routes } from "@angular/router";
//import { AppComponent } from "./app.component";
import { LocalComponent } from "./local/local.component";
export const APP_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'menu', title: 'menu', // added KSC
                loadComponent: () => import('./menu/menu.component').then(c => c.MenuComponent)

            },
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
                path: 'jserver', title: 'jserver',
                loadComponent: () => import('./jserver/jserver.component').then(c => c.JserverComponent)

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
                component: LocalComponent // NOT LAZY LOADED

            },
            {
                path: 'profile', title: 'profile',
                loadComponent: () => import('./profile/profile.component').then(c => c.ProfileComponent)

            },
            {
                path: 'profile/:id', title: 'prDetail',
                loadComponent: () => import('./profile-detail/profile-detail.component').then(c => c.ProfileDetailComponent)

            },
            {
                path: 'info-detail/:id', title: 'infoDetail',
                loadComponent: () => import('./info-detail/info-detail.component').then(c => c.InfoDetailComponent)

            },
            {
                path: 'address', title: 'address',
                loadComponent: () => import('./address/address.component').then(c => c.AddressComponent)

            },
            {
                path: 'buttons', title: 'buttons',
                loadComponent: () => import('./buttons/buttons.component').then(c => c.ButtonsComponent)

            },
            {
                path: 'signals', title: 'signals',
                loadComponent: () => import('./signals/signals.component').then(c => c.SignalsComponent)

            },
            {
                path: 'signals2', title: 'signals2',
                loadComponent: () => import('./signals2/signals2.component').then(c => c.Signals2Component)

            },
            {
                path: 'signals3', title: 'signals3',
                loadComponent: () => import('./signals3/signals3.component').then(c => c.Signals3Component)

            },
            {
                path: 'signals4', title: 'signals4',
                loadComponent: () => import('./signals4/signals4.component').then(c => c.Signals4Component)

            },
        ]
    }

]