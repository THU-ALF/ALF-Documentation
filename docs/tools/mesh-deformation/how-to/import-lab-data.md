---
title: Import measured data from a testing machine
sidebar_position: 3
---

# Import measured data from a testing machine

**Goal:** bring the force and travel a real testing machine recorded into the bending lab.

## Prepare the CSV file

Testing machines (for example from Zwick/Roell or Instron) usually give you an Excel workbook. Save each test as its own CSV file:

1. Open the workbook in Excel and click the tab of the test you want, for example *Stahl E235*. Excel only saves the open tab.
2. Choose **File > Save As**, and **CSV UTF-8 (*.csv)** or **CSV (Comma delimited) (*.csv)**.
3. Repeat for each tab you need.

German and international Excel versions both work. The importer recognises semicolons and decimal commas.

## Steps

1. Open **ALF > Content Creation > Mesh Deformation > Import Bending CSV Series (3-Point or 4-Point)**. You can also press **Import Four-Point CSV Series…** in step 2 of [Author Bending Apparatus](./add-a-bending-lab.md).
2. In step **1 File & Format**:
   - Press **Browse…** and choose the CSV file.
   - Leave **Delimiter / Separator**, **Number Format** and **Character Encoding** on **Auto-detect**.
   - Set **Header Row** to the row with the column names, and **First Data Row** to the first row with numbers. For example, if row 1 is a title, row 2 the column names and row 3 the units, set 2 and 4.
   - Check the **Table Preview** below. If the columns look wrong, try **Auto-Fix: Switch Delimiter**.

3. In step **2 Channel Mapping & Validation**:
   - Choose the **Bending Experiment**: four-point or three-point.
   - Choose which column holds the **Force Channel (N)** and the **Travel / Deflection (mm)**. Stress and strain columns are optional.
   - Fill in the specimen: **Material Name**, **Support Span L**, **Loading Arm a** (four-point only), **Specimen Width b**, **Height h** and **Total Specimen Length**, all in metres.
   - Check the summary: peak force, maximum travel and number of rows. Warnings tell you if something doesn't add up.
4. In step **3 Preview & Import**:
   - Under **Scene Bending Apparatus (optional)**, choose the lab to use the data in.
   - Press **Import & Create Experimental Series Asset**.
   - Press **Assign to Scene Apparatus**.
5. Save the scene.

## Result

The lab shows the measured test. The data is saved in `Assets/ALF/LocalSimulationData/FourPointBending/<material>`, on your computer only.

## Good to know

- **Dimensions are in metres** in this window: a 10 mm specimen is `0.01`.
- **Several materials:** import each CSV file separately, with its own material name.
