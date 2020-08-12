<<<<<<< HEAD

import {Excel} from '@/components/excel/Excel'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'
import './scss/index.scss'


 const excel = new Excel('#app', {

     components: [Header, Toolbar, Formula, Table]

 });

excel.render();
=======
import './module'
import './scss/index.scss'
console.log('Working')
>>>>>>> 0fb64cd7cc9831050368f95ce513d253d3e6695c
