import React from 'react';
import { Button } from 'reactstrap';

export const PrimaryBtn = props => <Button {...props} color="primary" />;

export const SecondaryBtn = props => <Button {...props} color="secondary" />;

export const SuccessBtn = props => <Button {...props} color="success" />;

export const DangerBtn = props => <Button {...props} color="danger" outline />;
