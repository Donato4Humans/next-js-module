import Form from "next/form";
import {getMeals, saveMeal} from "@/server-actions/serverActions";

export default async function Home() {

    const mealsArray = await getMeals();

  return (
      <div className="flex flex-col align-middle">

          <Form action={saveMeal}>
              <input className="border-2 border-violet-600" type="text" name={'title'}/>
              <button>send</button>
          </Form>

          <div className={'meals'}>
              {
                  mealsArray.map(meal => (<div key={meal.id}>{meal.title}</div>))
              }
          </div>
      </div>
  );
}
