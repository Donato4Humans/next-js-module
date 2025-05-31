import Form from "next/form";

export default function Home() {
    // SUCH APPROACH WITH SIMPLE FORMS IS SUITABLE ONLY FOR REDIRECTING TO OTHER PAGES & WITHOUT SENSITIVE INFO(LOGIN,PASSWORD, ETC.)
  return (
    <div className="flex justify-center align-middle">
        <form action="/submit">
            <input type="text" name={'name'} />
            <button>submit</button>
        </form>

        <Form action={'/submit'}>
            <input type="text" name={'name'}/>
            <button>send</button>

        </Form>
    </div>
  );
}
