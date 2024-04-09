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
                path: 'maths', title: 'maths', // added KSC
                loadComponent: () => import('./maths/maths.component').then(c => c.MathsComponent)

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
        ]
    }

]