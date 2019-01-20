import {VALIDATION_ERROR, NO_TOKEN} from './consts';

export class ErrorSerializer {
    static ValidationError(error: any) {
        let response = {
            status: VALIDATION_ERROR,
            message: error.annotate,
            details: error.details
        }

        return response;
    }
}