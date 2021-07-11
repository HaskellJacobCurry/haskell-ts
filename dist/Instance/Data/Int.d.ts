import { Int, HInt as _HInt, Constructor } from '../../DataStructure/Data/Int';
import { Bool } from './Bool';
import { Ordering } from '../../DataStructure/Data/Ordering';
import { INum } from '../../Typeclass/GHC/Num';
import { ISemiring } from '../../Typeclass/Data/Semiring';
import { IRing } from '../../Typeclass/Data/Ring';
import { IEq } from '../../Typeclass/Data/Eq';
import { IOrd } from '../../Typeclass/Data/Ord';
import { IShow } from '../../Typeclass/Data/Show';
export * from '../../DataStructure/Data/Int';
declare let notEq: (_: Int) => (_: Int) => Bool;
export { notEq };
declare let compare: (_: Int) => (_: Int) => Ordering;
export { compare };
declare let lt: (_: Int) => (_: Int) => Bool;
export { lt };
declare let notLt: (_: Int) => (_: Int) => Bool;
export { notLt };
declare let gt: (_: Int) => (_: Int) => Bool;
export { gt };
declare let notGt: (_: Int) => (_: Int) => Bool;
export { notGt };
declare let Num: INum<Int> & INum.Ext<Int>;
export { Num };
declare let Show: IShow<Int>;
export { Show };
declare let Semiring: ISemiring<Int>;
export { Semiring };
declare let Ring: IRing<Int>;
export { Ring };
declare let Eq: IEq<Int> & IEq.Ext<Int>;
export { Eq };
declare let Ord: IOrd<Int> & IOrd.Ext<Int>;
export { Ord };
interface HInt extends _HInt {
    Num: typeof Num;
    Show: typeof Show;
    Semiring: typeof Semiring;
    Ring: typeof Ring;
    Eq: typeof Eq;
    Ord: typeof Ord;
    notEq: (_: Int) => (_: Int) => Bool;
    compare: (_: Int) => (_: Int) => Ordering;
    lt: (_: Int) => (_: Int) => Bool;
    notLt: (_: Int) => (_: Int) => Bool;
    gt: (_: Int) => (_: Int) => Bool;
    notGt: (_: Int) => (_: Int) => Bool;
}
export { HInt };
declare type _Int = Int;
declare let _Int: Constructor & HInt;
export { _Int as Int };
export default _Int;
