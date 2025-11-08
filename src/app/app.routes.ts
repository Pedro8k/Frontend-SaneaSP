import { Routes } from '@angular/router';

import { AuthGuard } from '@core/guards/auth.guard';
import { AdminGuard } from '@core/guards/auth-admin.guard';

import { CitizenHomeComponent } from '@features/cidadao/pages/citizen-home/citizen-home.component';
import { LoginComponent as CitizenLoginComponent} from '@features/cidadao/pages/login/login.component';
import { RegisterComponent as CitizenRegisterComponent } from '@features/cidadao/pages/register/register.component';
import { ProfileComponent as CitizenProfileComponent } from '@features/cidadao/pages/profile/profile.component';
import { CitizenLayoutComponent } from '@features/layout/citizen-layout/citizen-layout.component';
import { PersonalInfoComponent } from '@features/cidadao/components/personal-info/personal-info.component';
import { MyComplaintsComponent } from '@features/cidadao/components/my-complaints/my-complaints.component';
import { ComplaintRegisterComponent } from '@features/denuncia/cadastro/pages/complaint-register/complaint-register.component';
import { ComplaintViewComponent } from './features/denuncia/pages/complaint-view/complaint-view.component';
import { ConfirmationPageComponent } from '@core/auth/pages/confirmation-page/confirmation-page.component';

// ----------------------------------------------------------------------
// 🚨 CAMINHO CORRIGIDO: Agora que o componente foi gerado em './landing/sanea-landing/'
// ----------------------------------------------------------------------
import { SaneaLandingComponent } from './landing/sanea-landing/sanea-landing.component';


export const routes: Routes = [

  // 1. PÁGINA INICIAL: Landing Page na rota raiz
  {path: '', component: SaneaLandingComponent},

  // 2. ÁREA DO CIDADÃO:
  {
    path: 'cidadao', component:CitizenLayoutComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full' },
      {path: 'menu', component: CitizenHomeComponent},
      {path: 'login', component: CitizenLoginComponent},
      {path: 'register', component: CitizenRegisterComponent},
      {path: 'complaints', component: MyComplaintsComponent, canActivate: [AuthGuard]},
      {path: 'new-complaint', component: ComplaintRegisterComponent, canActivate: [AuthGuard]},
      {path: 'complaint/:id', component: ComplaintViewComponent},
      {
        path: 'profile', component: CitizenProfileComponent, canActivate: [AuthGuard],
        children : [
          {path: '', redirectTo: 'me', pathMatch: 'full' },
          {path: 'me', component: PersonalInfoComponent},
          {path: 'saved-addresses', component: CitizenProfileComponent},
          {path: 'menu', component: CitizenProfileComponent},
          {path: 'notifications', component: CitizenProfileComponent},
        ]
      }
    ],
  },

  {path: 'register-confirmation', component: ConfirmationPageComponent},

  // Rota Coringa (Redireciona qualquer URL não encontrada para a Landing Page)
  { path: '**', redirectTo: '' }
];