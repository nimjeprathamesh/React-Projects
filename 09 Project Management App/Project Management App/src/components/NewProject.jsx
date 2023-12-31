import { useRef } from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({onInsert, onCancel}) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim === '') {
            modal.current.open();
            return;
        }

        onInsert({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return (
        <>
            <Modal ref={modal} buttonName="Ok">
                <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Oops... looks like you forget to enter the inputs.</p>
                <p className='text-stone-600 mb-4'>Please input the valid value.</p>
            </Modal>
            <div className="w-[35rem] mt-16 ">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
                            Cancel
                        </button>
                    </li>
                    <li>
                        <Button children="Save" onClick={handleSave} />
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} title="Title" />
                    <Input ref={description} title="Description" description />
                    <Input type="date" ref={dueDate} title="Due Date" />
                </div>
            </div>
        </>
    );
}