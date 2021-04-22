import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlunosComponent } from "./alunos.component";

import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";

const alunosRoutes: any = [
    { path: 'alunos', component: AlunosComponent, 
    
        children: [

            { path: 'novo', component: AlunoFormComponent },
            { path: ':id', component: AlunoDetalheComponent },
            { path: ':id/editar', component: AlunoFormComponent }
        
        ]
    }
];    
        
        // { path: 'novo', component: AlunoFormComponent },
        // { path: ':id', component: AlunoDetalheComponent },
        // { path: ':id/editar', component: AlunoFormComponent }    
        
        
        // { path: 'alunos', component: AlunosComponent },
        // { path: 'alunos/novo', component: AlunoFormComponent },
        // { path: 'alunos/:id', component: AlunoDetalheComponent },
        // { path: 'alunos/:id/editar', component: AlunoFormComponent }    
// ];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule],
    declarations: []
})
export class AlunosRoutingModule {}