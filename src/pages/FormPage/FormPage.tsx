import React, { useState, useEffect, useMemo } from 'react';
import FormInputText from '../../components/FormInputText';
import FormInputFile from '../../components/FormInputFile';
import FormSubmit from '../../components/FormSubmit';
import FormResponse from '../../components/FormResponse';
import { API_URL, HttpResponse, paramsJsonToFormData, postFormData } from '../../utils/api';

// TODO: Добавить свойства
interface IFromPageProps {}

type RequestParamType = {
  action: 'send_data';
  id: 1;
  contact: string;
  image: File | null;
};

const FromPage: React.FunctionComponent<IFromPageProps> = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);
  const [response, setResponse] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(true);

  const requestParams: RequestParamType = useMemo(
    () => ({
      action: 'send_data',
      id: 1,
      contact: [name, lastName, patronymic].join(' '),
      image: files?.[0] || null,
    }),
    [name, lastName, patronymic, files]
  );

  useEffect(() => {
    const fetchData = async (requestParams: RequestParamType) => {
      setLoading(true);
      const formData = paramsJsonToFormData(requestParams);
      const res: HttpResponse<any> = await postFormData(API_URL, formData);
      setLoading(false);
      setLoaded(true);
      setResponse(res.parsedBody);
    };
    if (!loaded) {
      fetchData(requestParams);
    }
  }, [loaded, requestParams]);

  const handleImageChange = (files: FileList | null): void => {
    setFiles(files);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoaded(false);
  };

  return (
    <div className='row'>
      <form className='col s6' onSubmit={handleSubmit}>
        <FormInputText id='name' label='Имя' className='white-text' value={name} onChange={setName} />
        <FormInputText id='lastName' label='Фамилия' className='white-text' value={lastName} onChange={setLastName} />
        <FormInputText
          id='patronymic'
          label='Отчество'
          className='white-text'
          value={patronymic}
          onChange={setPatronymic}
        />
        <FormInputFile files={files} onChange={handleImageChange} />
        <FormSubmit onSubmit={handleSubmit} loading={loading} />
        <FormResponse response={Object.keys(response).length ? JSON.stringify(response, null, 4) : ''} />
      </form>
    </div>
  );
};

export default FromPage;
