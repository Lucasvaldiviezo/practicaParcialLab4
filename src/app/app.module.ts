import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { TablaActorComponent } from './components/tabla-actor/tabla-actor.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideStorage,getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    ActorAltaComponent,
    PeliculaAltaComponent,
    TablaPeliculaComponent,
    BienvenidoComponent,
    DetallePeliculaComponent,
    NavbarComponent,
    TablaPaisesComponent,
    TablaActorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideStorage(() => getStorage()),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
