import {Semaphore} from './Semaphore'

export class Mutex extends Semaphore {
	constructor() {super(1)}
}
export default Mutex