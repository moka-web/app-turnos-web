

type ButtonProps = {

    clickFunction :  ()=> void ; 
    active : boolean
}


export const AddAppointmentButton = ({clickFunction , active } : ButtonProps  ) => {
 

  return (

    <button
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        
        onClick={clickFunction}

      >
        {!active ? (

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
    
    
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
        
        
            </svg>
            

        ) : 


        (
            

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" rotate-45 h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
        
        
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
            
            
                </svg>
                
          
        )



    
    }
    
    
    </button>
  


)




}
