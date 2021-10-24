import { useCallback, useEffect, useState } from "react";

import Api from "../../services/scrappers";

import ResultCard from "../../Components/ResultCard";
import { ButtonProps } from "react-bootstrap";

interface documentResult {
    id: number;
    site_name: string;
    url_root: string;
    task_name_prefix: string;
    created_at: string;
    url: string;
}

type documentsResponse = {
    count: number;
    next: string;
    previous: string;
    results: Array<documentResult>;
  };

  interface ResultCardProps extends ButtonProps {
    item: documentResult;
  }
const Results: React.FC = () => {
    const [documentsResponse, setDocumentsResponse] =
      useState<documentsResponse>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getDocuments();
    }, []);
    
    const getDocuments = async () => {
    setIsLoading(true);
    try {
        const { data } = await Api.get('');
        setDocumentsResponse(data);
        console.log(data);
    } catch (error) {
        alert("Ocorreu um erro ao buscar os documentos!");
    }
    setIsLoading(false);
    };
     
    const renderResultCard = (result: documentResult) => {
        return <ResultCard key={result?.id} item={result} />;
    };

    return(

    )
}

export default Results;
