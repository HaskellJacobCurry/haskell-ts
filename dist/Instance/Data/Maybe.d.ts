import { Maybe, HMaybe as _HMaybe } from '../../DataStructure/Data/Maybe';
import { String } from './String';
import { IShow } from '../../Typeclass/Data/Show';
import { Functor1 } from '../../Typeclass/Data/Functor';
import { Apply1 } from '../../Typeclass/Control/Apply';
import { Applicative1 } from '../../Typeclass/Control/Applicative';
import { Bind1 } from '../../Typeclass/Control/Bind';
import { Monad1 } from '../../Typeclass/Control/Monad';
import { ISemigroup } from '../../Typeclass/Data/Semigroup';
import { IMonoid } from '../../Typeclass/Data/Monoid';
import { Foldable1 } from '../../Typeclass/Data/Foldable';
export * from '../../DataStructure/Data/Maybe';
declare let show: <A>(_: IShow<A>) => (_: Maybe<A>) => String;
export { show };
declare let Show: <A>(_: IShow<A>) => IShow<Maybe<A>>;
export { Show };
declare let Functor: Functor1<"Maybe"> & Functor1.Ext<"Maybe">;
export { Functor };
declare let Apply: Apply1<"Maybe"> & Apply1.Ext<"Maybe">;
export { Apply };
declare let Applicative: Applicative1<"Maybe">;
export { Applicative };
declare let Bind: Bind1<"Maybe"> & Bind1.Ext<"Maybe">;
export { Bind };
declare let Monad: Monad1<"Maybe"> & Monad1.Ext<"Maybe">;
export { Monad };
declare let Semigroup: <A>(_: ISemigroup<A>) => ISemigroup<Maybe<A>>;
export { Semigroup };
declare let Monoid: <A>(_: ISemigroup<A>) => IMonoid<Maybe<A>> & IMonoid.Ext<Maybe<A>>;
export { Monoid };
declare let Foldable: Foldable1<"Maybe"> & Foldable1.Ext<"Maybe">;
export { Foldable };
interface HMaybe extends _HMaybe {
    Show: typeof Show;
    Functor: typeof Functor;
    Apply: typeof Apply;
    Applicative: typeof Applicative;
    Bind: typeof Bind;
    Monad: typeof Monad;
    Semigroup: typeof Semigroup;
    Monoid: typeof Monoid;
    Foldable: typeof Foldable;
    show: <A>(_: IShow<A>) => (_: Maybe<A>) => String;
}
declare type _Maybe<A> = Maybe<A>;
declare let _Maybe: HMaybe;
export { _Maybe as Maybe };
export default _Maybe;