import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import BootstrapTablet from "../Tablet/BootstrapTablet";
import Victory from "../Tablet/Victory";
import styles from "./LoaderFile.module.scss";

import { VictoryPie } from "victory";

function LoaderFile({}) {
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);
    const theme = useSelector((state) => state.theme)

    let fileReader;

    if (typeof window !== "undefined") {
        fileReader = new window.FileReader()
    }

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    };

    const csvFileToArray = string => {
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
    
        const array = csvRows.map(i => {
          const values = i.split(",");
          const obj = csvHeader.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
          }, {});
          return obj;
        });
    
        setArray(array);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
    
        if (file) {
          fileReader.onload = function (event) {
            const text = event.target.result;
            csvFileToArray(text);
          };
    
          fileReader.readAsText(file);
        }
    };

    console.log(array)

	return (
        <>
            <div className={styles.box}>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="file"
                        size="lg"
                        id={"csvFileInput"}
                        accept={".csv"}
                        onChange={handleOnChange}
                    />
                </Form.Group>
                {
                    (theme === 'dark')
                    ?
                    <Button
                        variant="light"
                        size="lg"
                        onClick={(e) => {
                            handleOnSubmit(e);
                        }}
                    >
                        Create a table
                    </Button>
                    :
                    <Button
                    variant="secondary"
                    size="lg"
                    onClick={(e) => {
                        handleOnSubmit(e);
                    }}
                    >
                        Create a table
                    </Button>
                }
            </div>

            <BootstrapTablet table={array}/>
        </>
	);
}


export default LoaderFile