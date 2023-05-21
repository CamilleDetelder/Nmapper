import { Formik, Form } from "formik"
import FormField from "./FormField"
import * as yup from "yup"

const checkIP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
const checkOptions = /^-[A-Za-z0-9-]+\s?(?:-[A-Za-z0-9-]+\s?)*$/

const validationSchema = yup.object({
  IP: yup.string().matches(checkIP, "Please enter a valid IP").required("Please enter an IP"),
  scanOption: yup.string().matches(checkOptions)
})

const NmapForm = () => {
  const handleSubmit = () => {
    alert("Nmap in progress...")
  }
  
    return(
     <Formik
            initialValues={{
              IP: "",
              scanOption: "",
              option: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Form  noValidate className="p-4 flex flex-col gap-4 "  >
            <FormField 
                name="IP" 
                placeholder=" Enter an IP to scan..."
                label="IP"
                min="4"  />
            <FormField 
              name="scanOption"
              placeholder=" Enter a scan Option..."
              label="Scan option" />
  
            <FormField
            name="option"
            placeholder=" Enter an option..."
            label="Option"/>
            {/* <table className="decoration-slate-500">
              <tr>
                <th>Options available: </th>
              </tr>
              <tr>
                <td>-sS</td>
              </tr>
              <tr>
                <td>-sV</td>
              </tr>
          </table> */}
            <button type="submit" className="w-40 text-white bg-red-600 active:bg-grey-700">Scan</button>
          </Form>
     </Formik>
      
    )
}

export default NmapForm