'use client';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import React, {JSX, SVGProps, useState} from "react"
import {GetProp, Image, Select, SelectProps, Upload, UploadFile, UploadProps} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import axiosInstance from "@/utils/axiosInstance";
import {RESPONSE_STATUS} from "@/utils/enums";


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

type FormTextData = {
  name:string,
  price:string,
  description:string,
  info:string,
  shape:string,
  color:string,
  gemType:string,
  treatments:string[]
}

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

export function V0UploadProduct() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([

  ]);
  const [colors, setColors] = useState<SelectProps['options']>([
      {
        label:'Red',
        value: 'red',
      }
      ])
  const [gemTypes, setGemtypes] = useState<SelectProps['options']>([
    {
      label:'Oval',
      value: 'Oval',
    }
  ])
  const [shapes, setShapes] = useState<SelectProps['options']>([
    {
      label:'Round',
      value: 'Round',
    }
  ])

  const [treatmentTypes, setTreatmentTypes] = useState<SelectProps['options']>([
    {
      label:'Oiled',
      value: 'Oiled',
    },
    {
      label:'Heat Treated',
      value: 'Heat Treated',
    }
  ])


  const [textData, setTextData] = useState<FormTextData>({
    name:'',
    price:'',
    description:'',
    info:'',
    shape:'',
    color:'',
    gemType:'',
    treatments:[]
  });

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
      setFileList(newFileList);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', textData.name);
    formData.append('price', textData.price);
    formData.append('description', textData.description);
    formData.append('about', textData.info);
    formData.append('color', textData.color)
    formData.append('shape', textData.shape)
    formData.append('gemType', textData.gemType)
    formData.append('treatments', JSON.stringify(treatmentTypes))
    fileList.forEach((file: UploadFile, index) => {
      if (file !== undefined && file.originFileObj !== undefined) {
        formData.append(`images`, file.originFileObj);
      }
    })
    axiosInstance.post('/gem', formData)
        .then((response)=>{
          if (response.status === RESPONSE_STATUS.SUCCESS){
            alert('sent')
          }
        })

  }

  const uploadButton = (
      <button style={{ border: 0, background: 'none' }} type="button">
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </button>
  );
  return (
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
        <form className="grid gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" placeholder="Enter product name" onChange={(event) => {
                setTextData({...textData, name: event.target.value});
              }}/>
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input id="price" placeholder="Enter price" type="number" onChange={(event) => {
                setTextData({...textData, price: event.target.value});
              }}/>
            </div>
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter product description" rows={4} onChange={(event) => {
              setTextData({...textData, description: event.target.value});
            }}/>
          </div>
          <div>
            <Label htmlFor="info">Information</Label>
            <Textarea id="info" placeholder="Enter product information" rows={4} onChange={(event) => {
              setTextData({...textData, info: event.target.value});
            }}/>
          </div>
          <div>
            <Label htmlFor="color">Color</Label>
            <Select
                size={'middle'}
                placeholder="Please select color"
                onChange={(value) => {
                  alert(value)
                  setTextData({...textData, color: value});
                }}
                style={{width: 200}}
                options={colors}
            />
          </div>
          <div>
            <Label htmlFor="color">Shape</Label>
            <Select
                size={'middle'}
                placeholder="Please select shape"
                onChange={(value) => {
                  setTextData({...textData, shape: value});
                }}
                style={{width: 200}}
                options={shapes}
            />
          </div>
          <div>
            <Label htmlFor="color">Type</Label>
            <Select
                size={'middle'}
                placeholder="Please select type"
                onChange={(value) => {
                  setTextData({...textData, gemType: value});
                }}
                style={{width: 200}}
                options={gemTypes}
            />
          </div>
          <div>
            <Label htmlFor="color">Treatments</Label>
            <Select
                mode="tags"
                size={'middle'}
                placeholder="Please select treatments"
                onChange={(treatments) => {
                  setTextData({...textData, treatments: treatments});
                }}
                style={{ width: '100%' }}
                options={treatmentTypes}
            />
          </div>
          <div>
            <Label>Product Images</Label>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              <Upload
                  action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
              {previewImage && (
                  <Image
                      wrapperStyle={{display: 'none'}}
                      preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                      }}
                      src={previewImage}
                  />
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <Button size="lg" onClick={handleSubmit}>
              Save Product
            </Button>
          </div>
        </form>
      </div>
  )
}

function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M5 12h14"/>
        <path d="M12 5v14"/>
      </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
