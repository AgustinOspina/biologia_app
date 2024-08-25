import { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

const Evolution = () => {

    const questionString = useRef(null);
    const responseString = useRef(null);


    async function handleSubmit() {
        const pregunta = questionString.current.value;

        if (pregunta.trim() === "") {
            responseString.current.value = "Por favor, ingresa una pregunta.";
          return;
        }
    
        try {
          const respuesta = await askQuestion(pregunta);
          responseString.current.value = "Respuesta: " + respuesta;
        } catch (error) {
          console.error("Error al obtener respuesta:", error);
          responseString.current.value = "Lo siento, no se pudo obtener la respuesta en este momento.";
        }
      }
    
     async function askQuestion(question) {

        const apiKey = "sk-proj-Q6eLHEGvZsAYMB4AF0mcT3BlbkFJg30S17rmZQFcgJpY7peS";
        try {
    
            const endpoint = 'https://api.openai.com/v1/chat/completions';
            const requestBody = {
                model: 'gpt-3.5-turbo-1106',
                messages: [
                    {
                        "role": "system",
                        "content": "Eres un asistente que responde preguntas en español y adaptadas para niños de entre 10 y 18 años. Si la pregunta o frase dada no esta relacionada al tema de los mecanismos de la evolución, responde 'Tema invalido'."
                    },
                    {   role: 'user', 
                        content: question,
                    },
                ],
                temperature: 0.5,
                max_tokens: 256,
            };
            const configApi = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
            };
    
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: configApi.headers,
                body: JSON.stringify(requestBody)
            });
    
            if (!response.ok) {
                throw new Error('No se pudo obtener la respuesta.');
            }
    
            const data = await response.json();
            return data.choices[0].message.content.trim();
        } catch (error) {
            console.error('Error al leer el archivo de configuración:', error);
        }
      }

      const handleKeyDownCapture = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          handleSubmit();
        }
      };
    return (
        <>
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><h2>Mecanismos de la Evolución</h2></Form.Label>
                    <Form.Control 
                        type="question" 
                        placeholder="pregunta..." 
                        onKeyDownCapture={handleKeyDownCapture}
                        ref={questionString} 
                    />
                    <Form.Text className="text-muted">
                        Realiza preguntas únicamente sobre mecanismos de la evolución.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="button" onClick={handleSubmit}>
                    Enviar
                    
                </Button>
            </Form>
        </div>
        <div className='mt-5 p-1'>
            <Form.Control
                as="textarea"
                readOnly={true}
                style={{ height: '300px' }}
                ref={responseString}
                />
        </div>
        </>
    )
}

export default Evolution;