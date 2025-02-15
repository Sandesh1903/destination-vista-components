import {
    Datagrid,
    List,
    TextField,
    NumberField,
    ReferenceManyCount,
    FunctionField,
    useGetIdentity,
    ShowButton,
    EditButton,
    DeleteWithConfirmButton,
  } from "react-admin";
  import { IconButton, Chip, Tooltip } from "@mui/material";
  import { Visibility, Edit, Delete } from "@mui/icons-material";
  import CurrencyField from "../components/CustomFields/CurrencyField";
  import ImageField from "../components/CustomFields/ImageField";
  
  export const PackageList = () => {
    const { data: user } = useGetIdentity();
  
    return (
      <List filter={{ vendorId: user?.vendorId }}>
        <Datagrid rowClick={false} bulkActionButtons={false}>
          <TextField source="id" />
          <ImageField source="images" />
          <TextField source="title" />
          <CurrencyField locale="en-IN" currency="INR" source="price" />
          <NumberField label="Duration (Days)" source="durationDays" />
          <TextField source="destination" />
          <ReferenceManyCount label="Booking" reference="booking" target="packageId" link />
          <NumberField label="Available Slots" source="availableSlots" />
  
          {/* Action Buttons with Icons */}
          <FunctionField
            source=""
            render={(record) => (
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {/* Show Details */}
                <Tooltip title="View Details">
                  <ShowButton
                    icon={<Visibility />}
                    label=""
                    sx={{ color: "#1976d2" }} // Blue color
                  />
                </Tooltip>
  
                {/* Edit */}
                <Tooltip title="Edit Package">
                  <EditButton
                    icon={<Edit />}
                    label=""
                    sx={{ color: "#388e3c" }} // Green color
                  />
                </Tooltip>
  
                {/* Delete */}
                <Tooltip title="Delete Package">
                  <DeleteWithConfirmButton
                    icon={<Delete />}
                    label=""
                    sx={{ color: "#d32f2f" }} // Red color
                  />
                </Tooltip>
              </div>
            )}
          />
        </Datagrid>
      </List>
    );
  };
  