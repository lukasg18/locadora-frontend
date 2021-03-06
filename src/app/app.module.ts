import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './viewer/home/home.component';
import { LoginComponent } from './viewer/login/login.component';
import { CadastroPessoaComponent } from './viewer/cadastroPessoa/cadastroPessoa.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PasswordModule } from 'primeng/password';
import { PessoaService } from './services/pessoaService';
import { HttpClientModule } from '@angular/common/http';
import { EnderecoService } from './services/enderecoService';
import { CatalogoJogosComponent } from './viewer/catalogoJogos/catalogoJogos.component';
import { JogosService } from './services/jogosService';
import { RelatoriosComponent } from './viewer/relatorios/relatorios.component';
import { VitrineService } from './services/vitrineService';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroPessoaComponent,
    CatalogoJogosComponent,
    RelatoriosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule,
    SelectButtonModule,
    AutoCompleteModule,
    PasswordModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule,

  ],
  providers: [PessoaService, EnderecoService, JogosService, VitrineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
