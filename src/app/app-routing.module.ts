import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component'
import { NameEditorComponent } from './name-editor/name-editor.component'
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  { path: '', redirectTo: '/name-editor', pathMatch: 'full' },
  { path: 'name-editor', component: NameEditorComponent },
  { path: 'profile-editor', component: ProfileEditorComponent },
  { path: 'worker-editor', component: WorkerComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

