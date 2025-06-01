import Form from "next/form";
import {saveCar} from "@/server-actions/serverActions";

const FormComponent = () => {
    return (
        <div>
            <Form action={saveCar}>
                <input className="border-2 border-violet-600" type="text" name={'brand'} placeholder={'enter car brand'}/>
                <input className="border-2 border-violet-600" type="number" name={'price'} placeholder={'enter car price'}/>
                <input className="border-2 border-violet-600" type="number" name={'year'} placeholder={'enter car year'}/>
                <button>send</button>
            </Form>
        </div>
    );
};

export default FormComponent;