import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AdminCompaniesComponent } from './admin-companies/admin-companies.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { AdminTipsComponent } from './admin-tips/admin-tips.component';
import { AdminComponent } from './admin/admin.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { CandEventComponent } from './cand-event/cand-event.component';
import { CandPostuleComponent } from './cand-postule/cand-postule.component';
import { CandTipsComponent } from './cand-tips/cand-tips.component';
import { CandComponent } from './cand/cand.component';
import { CandidatComponent } from './candidat/candidat.component';
import { CompaniesComponent } from './companies/companies.component';

import { ContactComponent } from './contact/contact.component';


import { EventpageComponent } from './eventpage/eventpage.component';
import { FAQComponent } from './faq/faq.component';
import { FootComponent } from './foot/foot.component';
import { FormulairepostComponent } from './formulairepost/formulairepost.component';
import { HeaderComponent } from './landingpage/header.component';
import { ListappComponent } from './listapp/listapp.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './offer page/footer.component';
import { OffercreateComponent } from './offercreate/offercreate.component';
import { OfferlistComponent } from './offerlist/offerlist.component';
import { RecrEventsComponent } from './recr-events/recr-events.component';
import { RecrTipsComponent } from './recr-tips/recr-tips.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { SignupComponent } from './signup/signup.component';
import { SpecComponent } from './spec/spec.component';
import { TermsComponent } from './terms/terms.component';
import { TipspageComponent } from './tipspage/tipspage.component';

const routes: Routes = [

  {
    path:'navbar', component:NavbarComponent
  },
  {
    path:'home',
    component:HeaderComponent
  },
{path:'',redirectTo:'Offers',pathMatch:'full'},
  {
    path:'Offers',
    component:FooterComponent
  },{path:'ApplyForm',component:FormulairepostComponent},
  {
    path:'Tips',
    component:TipspageComponent
  },
  {
    path:'Events',
    component:EventpageComponent
  },
  {
    path:'Contact',
    component:ContactComponent
  },
  {
    path:'Recruiter_corner',
    component:SpecComponent

  },
  {path:'Admin_user',component:AdminuserComponent},{path:'Admin_Event',component:AdminEventsComponent},{path:'Admin_Tips',component:AdminTipsComponent},{path:'Admin_Companies',component:AdminCompaniesComponent},
  {
    path:'login',
    component:LoginComponent
  }

  ,{
    path:'foot', component:FootComponent
  },
  {
    path:'Sign_up',component:SignupComponent
  },
  {
    path:'FAQ',component:FAQComponent
  },
  {
    path:'Termsofuse',component:TermsComponent
  },
  {
    path:'Recruiter_access',component:RecruiterComponent
  },{path:'Admin_space',component:AdminComponent},{path:'Candidat',component:CandidatComponent},
  {
    path:'Candidate_access',component:CandComponent
  },{path:'Companies',component:CompaniesComponent},{path:'offers_list',component:OfferlistComponent},{path:'list_apps',component:ListappComponent},{path:'create_offer',component:OffercreateComponent}
,{path:'Candidate_Events_Participated',component: CandEventComponent},{path:'Candidate_Tips_Saved',component:CandTipsComponent},{path:'Candidate_List_Apply',component:CandPostuleComponent},{path:'Recruiter_Saved_Tips',component:RecrTipsComponent},{path:'Recruiter_Participate_Events',component:RecrEventsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AdminComponent,CandidatComponent, CandEventComponent,CandPostuleComponent,CandTipsComponent,RecrEventsComponent,RecrTipsComponent,NavbarComponent,AdminCompaniesComponent,AdminEventsComponent,AdminTipsComponent,AdminuserComponent,FormulairepostComponent, RecruiterComponent,
 ListappComponent,OffercreateComponent,OfferlistComponent, CandComponent,ContactComponent,FAQComponent,CompaniesComponent,HeaderComponent,SignupComponent,FooterComponent,TipspageComponent,TermsComponent,EventpageComponent,SpecComponent,LoginComponent,FootComponent];

